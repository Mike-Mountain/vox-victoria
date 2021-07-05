export class Quote {
  text: string;
  attribution: string;

  constructor(data: any) {
    this.text = data.q;
    this.attribution = data.a;
  }

}
