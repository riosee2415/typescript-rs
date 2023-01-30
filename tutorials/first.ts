const a: string = "5";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;

const f = "7";

// const f: any = ??
// If use 'any', This project lost typescript. so not recommanded

function add(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => x + y;

type AddType = (x: number, y: number) => number;
const add3: AddType = (x, y) => x + y;

interface Add4 {
  (x: number, y: number): number;
}

const add4: Add4 = (x, y) => x + y;

const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
const arr: string[] = ["123", "456"];
const arr2: number[] = [1, 2, 3, 4, 5];
const arr3: Array<number> = [123, 456];
const tuple: [number, number, string] = [1, 2, "3"];

let aa = 123; // a의 type은 number로 추론됩니다.
// aa = "hellow" 타입이 변경되어서 에러를 발생시킨다.
aa = "Hello" as unknown as number; // 리터럴(우항)의 타입을 강제로 변환시킨다.
