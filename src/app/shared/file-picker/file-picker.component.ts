import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
})
export class FilePickerComponent {
  @ViewChild('fileInput', { static: false, read: ElementRef }) fileInput:
    | ElementRef<HTMLInputElement>
    | undefined;
  @Output() fileChange = new EventEmitter<File | null>();
  @Output() uploadClick = new EventEmitter<void>();

  private fileData: File | null = null;

  get file(): File | null {
    return this.fileData;
  }
  @Input() set file(file: File | null) {
    this.fileData = file;
    this.resetFileInput();
  }

  selectFile(files: FileList | null): void {
    if (!files?.length) {
      this.removeFile();
      return;
    }

    const file = files.item(0) as File;

    if (!['text/csv', 'application/vnd.ms-excel'].includes(file.type)) {
      this.removeFile();
      return;
    }

    this.fileChange.emit(file);
    this.file = file;
  }

  removeFile(): void {
    this.file = null;
    this.fileChange.emit(null);
  }

  private resetFileInput(): void {
    if (!this.fileData && this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = '';
    }
  }
}
