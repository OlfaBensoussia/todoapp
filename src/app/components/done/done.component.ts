import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodosService} from 'src/app/services/todos.service';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
  todos: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'description'];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private http: HttpClient, private TodosService: TodosService) {
    this.TodosService.GetDone().subscribe( (element: any) => {
      this.dataSource = new MatTableDataSource(element);
    });
  }
  ngOnInit(): void {
  }
}
