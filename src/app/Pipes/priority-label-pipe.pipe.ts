import { Pipe, PipeTransform } from '@angular/core';
import { TaskPriority } from '../interfaces/task';

@Pipe({
  name: 'priorityLabelPipe'
})
export class PriorityLabelPipePipe implements PipeTransform {

  transform(value: TaskPriority): string {
    switch(value){
      case TaskPriority.High: return '🔴 High';
      case TaskPriority.Medium: return '🟠 Medium';
      case TaskPriority.Low: return '🟢 Low';
      default: return '🟡 Unknown';
    }
  }
}
