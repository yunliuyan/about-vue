/**
 * 还用原型链进行属性继承
 */
function protoAugment(target,src) {
    target.__proto__ = src;
}

/**
 * def用于定义对象的属性值，enumerable控制对象是否可枚举
 */
function def(obj,key,value,enumerable) {
    Object.defineProperty(obj,key,{
        value:value,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}

let _id = 0;
/**
 * Dep构造器用于维持$watcher检测队列
 */
function Dep(){
    this.id = _id++;
    this.subs = [];
}

Dep.prototype = {
    constructor:Dep,
    addSub: function(sub){
        this.subs.push(sub);
    },
    notify: function(){
        this.subs.forEach(function(sub){
            if(typeof sub.update == 'function'){
                sub.update();
            }
        })
    },
    removeSub: function(sub){
        var index = this.subs.indexof(sub);
        if(index > -1){
            this.sub.splice(index,1);
        }
    },
    depend: function(){
        Dep.target.addDep(this);
    }
}

Dep.target = null; //定义Dep的一个属性，当watcher时Dep.targert=watcher实例对象

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);//arrayMethod实现对Array.prototype原型方法的拷贝

['push','pop','shift','unshift','sort','reverse','splice'].forEach(function(method){
	var original = arrayProto[method];
	def(arrayMethods,method,function mutator(){
		var args = Array.prototype.slice.call(arguments);
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {  //对数组新加的值做处理
	    	case 'push' :
	    	inserted = args;
	    	break;
	    	case 'unshift' :
	    	inserted = args;
	    	break;
	    	case 'splice' :
	    	inserted = args.slice(2);
	    	break;
	    }

	    if(inserted){
	    	ob.observeArray(inserted);//对新增加的值进行set,get设置
	    }
	    ob.dep.notify();
	    return result;
	})
})

function Observer(data){
    this.data = data;
    this.dep = new Dep();
    def(data,'__ob__',this);
    if(Array.isArray(data)){
        protoAugment(data,arrayMethods);
        this.observeArray(data);
    }else{
        this.walk(data);
    }
}

Observer.prototype = {
    walk: function(data){
        var _this = this;
        Object.keys(data).forEach(function(key){
            _this.convert(key,data[key]);
        })
    },
    convert: function(key,val){
        this.defineReactive(this.data,key,val);
    },
    defineReactive: function(data,key,val){
        var ochildOb = observer(val);
        var _this = this;
        var dep = new Dep();
        Object.defineProperty(data,key,{
            configurable:false,
            enumerable: true,
            get: function(){
                if(Dep.target){
                    dep.depend();
                    if(Array.isArray(val)){
                        ochildOb.dep = dep;
                        dependArray(val);
                    }
                }
                return val;
            },
            set: function(newVal) {
                if(newVal == val)return;
                val = newVal;
                observer(newVal);
                dep.notify();
            }
        });
    },
    observeArray: function(items){
        for(var i=0;i<items.length;i++){
            observer(items[i]);
        }
    }
}

function observer(data){
    if(!data || typeof data !== 'object') return;
    var ob;
    if(data.hasOwnProperty('__ob__') && data.__ob__ instanceof Observer) {
        ob = data.__ob__;
    }else{
        ob = new Observer(data);
    }
    return ob;
}

