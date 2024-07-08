import {AfterViewChecked, Component, ViewChild} from '@angular/core';
import {
  MatTableDataSource, MatTableModule
} from "@angular/material/table";
import {COMPLETED_COURSES} from "../../../completed-courses-2";
import {MatSort, MatSortModule} from "@angular/material/sort";

@Component({
  selector: 'app-completed-course-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
  ],
  templateUrl: './completed-course-table.component.html',
  styleUrl: './completed-course-table.component.scss'
})
export class CompletedCourseTableComponent implements AfterViewChecked {

  completedCourseDS: MatTableDataSource<any>;
  completedCourseTableHeaders = ['class', 'desc', 'term',];

  @ViewChild(MatSort) sort?: MatSort;

  constructor() {
    this.completedCourseDS = new MatTableDataSource(COMPLETED_COURSES);
    this.completedCourseDS.data =
      this.completedCourseDS.data.sort((a, b) => a.termId > b.termId ? -1 : 1);
    this.completedCourseDS.sortingDataAccessor = (data) => data.termId;
  }

  ngAfterViewChecked(): void {
    if (this.sort) this.completedCourseDS.sort = this.sort;
  }

}
