import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
  NbWindowService
} from '@nebular/theme';
// import { NbWindowRef } from '@nebular/theme';
import { BillDetails, BillHeader } from '../common-utils/common.constants';
import { FormGroup, FormControl } from '@angular/forms';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Date: any;
  HeaderName: string;
  ServiceName: string;
  Qty: number;
  TotalServiceRate: number;
  ConcessionAmt: number;
  Edit: any;
}
@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.scss']
})
export class BillDetailsComponent {
  @ViewChild('contentTemplate', { static: false }) contentTemplate: TemplateRef<
    any
  >;
  customColumn = 'Edit';
  editableBillColumns = ['Qty', 'TotalServiceRate', 'ConcessionAmt'];
  private BillEditForm: FormGroup;
  defaultColumns = [
    'Date',
    'HeaderName',
    'ServiceName',
    'Qty',
    'TotalServiceRate',
    'ConcessionAmt'
  ];
  allColumns = [...this.defaultColumns, this.customColumn];
  billHeader = BillHeader;
  private data: TreeNode<FSEntry>[] = BillDetails;

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  selectedRow: any;
  windowRef: any;

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,
    // private windowRef: NbWindowRef,
    private windowService: NbWindowService
  ) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
    this.BillEditForm = new FormGroup({
      Qty: new FormControl(),
      TotalServiceRate: new FormControl(),
      ConcessionAmt: new FormControl()
    });
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }

  openEditWindow(data, i, status) {
    if (!status) {
      this.windowRef.close();
    } else {
      this.selectedRow = i;
      this.BillEditForm.patchValue({
        Qty: data.Qty,
        TotalServiceRate: data.TotalServiceRate,
        ConcessionAmt: data.ConcessionAmt
      });
      this.windowRef = this.windowService.open(this.contentTemplate, {
        title: 'Edit',
        context: { text: 'Bill' }
      });
    }
  }

  editDetails() {
    BillDetails[
      this.selectedRow
    ].data.Qty = this.BillEditForm.controls.Qty.value;
    BillDetails[
      this.selectedRow
    ].data.TotalServiceRate = this.BillEditForm.controls.TotalServiceRate.value;
    BillDetails[
      this.selectedRow
    ].data.ConcessionAmt = this.BillEditForm.controls.ConcessionAmt.value;
    this.data = BillDetails;
    this.dataSource = this.dataSourceBuilder.create(this.data);
    this.openEditWindow(0, 0, false);
  }
}
