import { Jurisdiction } from "@mmsi/jurisdiction";
import { jurisdictionFromMID } from "@mmsi/data";

/**
 * Wrapper around a nine-digit MMSI that can extract details from it.
 */
export class MMSI {
  private id: string;

  constructor (identity: number|string = "") {
    this.identity = identity.toString();
  }

  public get identity (): string {
    return this.id;
  }
  public set identity (value: string) {
    value = value || "";
    this.id = value.trim().padStart(9, "0").substring(0, 9);
  }

  public get isValid (): boolean {
    return validateMMSI(this.identity);
  }

  public get midCode (): string {
    return extractMID(this.identity);
  }

  public get jurisdiciton (): Jurisdiction {
    return jurisdictionFromMID(this.midCode);
  }
}

// Valid MID codes are three digits, starting with a 2-7.
const reMID = "([2-7]\\d{2})";
const midRegExes: RegExp[] = [
  `0${reMID}\\d{5}`, // Group ship station, 0MIDxxxxx
  `00${reMID}\\d{4}`, // Coast stations, 00MIDxxxx
  `111${reMID}\\d{3}`, // SAR aircraft, 111MIDxxx
  `${reMID}\\d{6}`, // Individual ships, MIDxxxxxx
  `8${reMID}\\d{5}`, // Handheld VHF transceiver, 8MIDxxxxx
  `98${reMID}\\d{4}`, // Craft associated with parent ship, 98MIDxxxx
  `99${reMID}\\d{4}`, // Navigational aids, 99MIDxxxx
].map(re => new RegExp(`^${re}$`));

/**
 * Attempt to find a valid MID code within the given MMSI string.
 *
 * Returns the MID code string if found, `undefined` otherwise.
 *
 * @param mmsi String from which to extract a MID code, if possible.
 * @returns Three-digit MID if a valid one is found.
 */
const extractMID = (mmsi: string): string => {
  for (const re of midRegExes) {
    const matches = re.exec(mmsi);
    if (matches) {
      return matches[1];
    }
  }

  return;
}

/**
 * Attempt to determine whether the given string could be a valid MMSI.
 *
 * Note that no attempt is made to determine whether the value is actually
 * registered or assigned as an MMSI on a real-world vessel.
 *
 * @param mmsi String to validate as MMSI.
 * @returns True if input matches expected MMSI formatting, false otherwise.
 */
const validateMMSI = (mmsi: string): boolean => {
  return /^[0-9]{9}$/.exec(mmsi) !== null;
}