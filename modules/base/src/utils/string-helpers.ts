export default abstract class StringHelpers {
  public static splitDashes(input: string): string[] {
    return input.split('–');
  }
}
