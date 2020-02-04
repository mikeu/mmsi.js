export class MMSI {
  private _id: string;
  private _mid: string;
  
  public get identity () : string {
    return this._id;
  }  
  public set identity (value : string) {
    value = value || "";
    this._id = value.trim().padStart(9, "0");
    this._mid = undefined;
  }

  public get isValid () : boolean {
    return this.identity.match(/^[0-9]{9}$/) !== null;
  }

  public get midCode () : string {
    if (this._mid === undefined) {
      this._mid = extractMid(this.identity);
    }

    return this._mid;
  }

  constructor (identity: number|string) {
    this.identity = (identity ?? "").toString().padStart(9, '0');
  }
}

function extractMid (mmsi: string): string {
  const category = Number(mmsi[0]);
  let mid = undefined;
  if (category === 1) {
    mid = mmsi.substring(3, 6);
  } else if (category >= 2 && category <= 7) {
    mid = mmsi.substring(0, 3);
  } else if (category === 9) {
    const subcategory = Number(mmsi[1]);
    if (subcategory === 8 || subcategory === 9) {
      mid = mmsi.substring(2, 5);
    }
  }

  return mid;
}
