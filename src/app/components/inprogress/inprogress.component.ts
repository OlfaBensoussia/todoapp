import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodosService} from 'src/app/services/todos.service';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrls: ['./inprogress.component.scss']
})
export class InprogressComponent implements OnInit {
  todos: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'description'];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private http: HttpClient, private TodosService: TodosService) {
    this.TodosService.GetInprogress().subscribe( (element: any) => {
      this.dataSource = new MatTableDataSource(element);
    });
  }
  ngOnInit(): void {
  }
}
