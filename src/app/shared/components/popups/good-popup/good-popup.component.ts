import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevExtremeModule, DxSelectBoxComponent } from 'devextreme-angular';
import { GoodModel } from 'src/app/shared/definitions/models/entities.model';
import { BaseService } from 'src/app/services/base.service';
import { AutocompleteWithInsertItemModule } from '../../autocomplete-with-insert-item/autocomplete-with-insert-item.component';

@Component({
  selector: 'app-good-popup',
  templateUrl: './good-popup.component.html',
  styleUrls: ['./good-popup.component.scss'],
})
export class GoodPopupComponent implements OnInit {
  @ViewChild('selectBoxRef', { static: false })
  selectBox: QueryList<DxSelectBoxComponent>;

  @Input()
  ShowPopUpForm: boolean;

  @Input()
  PopUpFormMode: string;

  @Input()
  Title!: string;

  @Input()
  FormData: GoodModel;

  @Output()
  InsertData = new EventEmitter();

  @Output()
  EditData = new EventEmitter();

  @Output()
  ClosePopup = new EventEmitter();

  constructor(private route: ActivatedRoute, public baseService: BaseService) {}

  pageData = {
    showPopUpForm: false,
    popUpFormMode: 'insert' as 'insert' | 'edit',
  };

  // enumsList: any = [];
  // enum: any = [];
  enums: any = {
    Type: [
      {
        id: 1,
        text: 'موز',
        categoryId: 1,
        category: 'میوه جات',
      },
      {
        id: 2,
        text: 'کاهو',
        categoryId: 2,
        category: 'صیفی جات',
      },
      {
        id: 3,
        text: 'نعنا',
        categoryId: 3,
        category: 'سبزی جات',
      },
      {
        id: 4,
        text: 'دراگون',
        categoryId: 4,
        category: 'استوایی',
      },
    ],

    Quality: [
      {
        id: 1,
        text: 'درجه 1',
      },
      {
        id: 2,
        text: 'درجه 2',
      },
      {
        id: 3,
        text: 'درجه 3',
      },
      {
        id: 4,
        text: 'شکسته',
      },
    ],

    Packing: [
      {
        id: 1,
        text: 'سبدی',
      },
      {
        id: 2,
        text: 'کارتونی',
      },
      {
        id: 3,
        text: '12 تایی',
      },
      {
        id: 4,
        text: '15 تایی',
      },
    ],

    Brand: [
      {
        id: 1,
        text: 'پریما',
      },
      {
        id: 2,
        text: 'احسان',
      },
      {
        id: 3,
        text: 'برند 3',
      },
      {
        id: 4,
        text: 'برند 4',
      },
    ],

    Category: [
      {
        id: 1,
        text: 'میوه جات',
      },
      {
        id: 2,
        text: 'صیفی جات',
      },
      {
        id: 3,
        text: 'سبزی جات',
      },
      {
        id: 4,
        text: 'استوایی',
      },
    ],
  };

  newFormButtonOptions = {
    width: '100%',
    text: ['افزودن'],
    type: 'default',
    stylingMode: 'contained',
    onClick: () => {
      if (this.FormData.Type && this.FormData.Packing && this.FormData.Brand) {
        this.InsertData.emit(this.FormData);
        this.ShowPopUpForm = false;
        this.FormData = new GoodModel();
      } else {
        this.baseService.notify('لطفا فرم را تکمیل کنید!', 'error');
      }
    },
  };

  editFormButtonOptions = {
    width: '100%',
    text: 'ویرایش',
    type: 'default',
    stylingMode: 'contained',
    onClick: () => {
      this.EditData.emit(this.FormData);
      this.ShowPopUpForm = false;
      this.FormData = new GoodModel();
    },
  };

  closeFormButtonOptions = {
    width: '100%',
    text: 'انصراف',
    type: 'normal',
    stylingMode: 'contained',
    onClick: () => {
      this.ClosePopup.emit();
      this.ShowPopUpForm = false;
      this.FormData = {
        GoodId: null,
        Type: null,
        Category: null,
        Name: '',
        Brand: null,
        Quality: null,
        Packing: null,
        Weight: 0,
        PercentageDrop: 0,
      };
    },
  };

  ngOnInit(): void {
    // this.loadEnums();
    // this.loadData();
  }

  //Handle Functions
  handleAutocompleteValue(e: any, field: any) {
    if (e) {
      this.FormData[field] = e.id;
      if (field === 'Type') {
        this.FormData.Category = e.categoryId;
      }
    } else {
      this.FormData[field] = null;
    }
  }
}

@NgModule({
  imports: [DevExtremeModule, AutocompleteWithInsertItemModule],
  declarations: [GoodPopupComponent],
  exports: [GoodPopupComponent],
})
export class GoodPopupModule {}
