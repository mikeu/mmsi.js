import { MMSICountry } from './data';
import { midCountries } from './data';

export class MMSI {
  private _id: string;
  
  public get identity () : string {
    return this._id;
  }
  
  public set identity (value : string) {
    value = value || "";
    this._id = value.padStart(9, "0");
  }

  constructor (identity: number|string) {
    this.identity = (identity ?? "").toString().padStart(9, '0');
  }

  isValid (): boolean {
    return this.identity.match(/^[0-9]{9}$/) !== null;
  }
}

export function countryFromMmsi (mmsi: number|string): MMSICountry {
  const m = mmsi.toString().trim();
  if (!m.match(/^[0-9]{9}$/)) { return undefined; }

  const category = Number(m[0]);
  let mid = undefined;
  if (category === 1) {
    mid = m.substring(3, 6);
  } else if (category >= 2 && category <= 7) {
    mid = m.substring(0, 3);
  } else if (category === 9) {
    const subcategory = Number(m[1]);
    if (subcategory === 8 || subcategory === 9) {
      mid = m.substring(2, 5);
    }
  }

  if (!mid) { return undefined; }

  return midCountries[Number(mid)];
}