export default interface FileViewerEstructure {
  id: string;
  name: string;
  extension?: string;
  children?: FileViewerEstructure[];
}
