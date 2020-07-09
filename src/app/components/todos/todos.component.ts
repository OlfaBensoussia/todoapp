import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodosService} from 'src/app/services/todos.service';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'description'];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private http: HttpClient, private TodosService: TodosService) {
    this.TodosService.GetTodos().subscribe( (element: any) => {
      this.dataSource = new MatTableDataSource(element);
    });
  }
  ngOnInit(): void {
  }
}
