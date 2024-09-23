class A {

    public hogeA() {

        player.say("hogeA")

    }

}

class B {

    public hogeB() {

        player.say("hogeB")

    }

}

player.onChat("run", function () {

 testA.hogeA()

 testB.hogeB()

})



let testA = new A()

let testB = new B()

