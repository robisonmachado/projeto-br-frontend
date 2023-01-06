import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {

  }

  transform(url: string) {
    const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
    console.log('SafeUrlPipe: url >>> ', url);
    console.log('SafeUrlPipe: sanitized url >>> ', sanitizedUrl);
    return sanitizedUrl;
  }

}


