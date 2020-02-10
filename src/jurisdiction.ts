/**
 * Details pertaining to a country or other territory to which
 * the International Telecommunication Union has assigned
 * Marine Identification Digits.
 */
export class Jurisdiction {
  private longName: string;

  code: string;

  name: string;

  public get fullName (): string {
    return this.longName ?? this.name;
  }
  public set fullName (value: string) {
    this.longName = value;
  }

  constructor (code: string, name: string, fullName?: string) {
    this.code = code;
    this.name = name;
    this.fullName = fullName;
  }
}