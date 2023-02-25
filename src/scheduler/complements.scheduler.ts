import { scheduleJob, Job } from 'node-schedule';
import { IScheduler, JobType } from '../interfaces/scheduler';

export class ComplementsScheduler implements IScheduler {
  private job: Job | null = null;

  schedule(job: JobType): void {
    this.job = scheduleJob('* * 10 * * *', job);
  }

  deleteJob(): void {
    this.job?.cancel();
    this.job = null;
  }

  get isScheduled() {
    return !!this.job;
  }
}
