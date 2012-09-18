/*EXPECTED
1
1
2
3
5
8
13
*/
class _Main {
	static function fib(n : number) : number {
		var ret;
		switch (n) {
		case 1:
		case 1 + 1:
			ret = 1;
			break;
		default:
			ret = _Main.fib(n - 1) + _Main.fib(n - 2);
			break;
		}
		return ret;
	}
	static function main(args : string[]) : void {
		log _Main.fib(1);
		log _Main.fib(2);
		log _Main.fib(3);
		log _Main.fib(4);
		log _Main.fib(5);
		log _Main.fib(6);
		log _Main.fib(7);
	}
}
