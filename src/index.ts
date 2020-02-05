export class MMSI {
  private _id: string;

  constructor (identity: number|string = "") {
    this.identity = identity.toString();
  }
  
  public get identity () : string {
    return this._id;
  }  
  public set identity (value : string) {
    value = value || "";
    this._id = value.trim().padStart(9, "0").substring(0, 9);
  }

  public get isValid () : boolean {
    return validateMMSI(this.identity);
  }

  public get MID () : string {
    return extractMID(this.identity);
  }
}

// Valid MID codes are three digits, starting with a 2-7.
const reMID: string = "([2-7]\\d{2})";
const midRegExes: RegExp[] = [
  `0${reMID}\\d{5}`, // Group ship station, 0MIDxxxxx
  `00${reMID}\\d{4}`, // Coast stations, 00MIDxxxx
  `111${reMID}\\d{3}`, // SAR aircraft, 111MIDxxx
  `${reMID}\\d{6}`, // Individual ships, MIDxxxxxx
  `8${reMID}\\d{5}`, // Handheld VHF transceiver, 8MIDxxxxx
  `98${reMID}\\d{4}`, // Craft associated with parent ship, 98MIDxxxx
  `99${reMID}\\d{4}`, // Navigational aids, 99MIDxxxx
].map(re => new RegExp(re));

function extractMID (mmsi: string): string {
  for (const re of midRegExes) {
    const matches = re.exec(mmsi);
    if (matches) {
      return matches[1];
    }
  }

  return undefined;
}

function validateMMSI (mmsi: string): boolean {
  return /^[0-9]{9}$/.exec(mmsi) !== null;
}