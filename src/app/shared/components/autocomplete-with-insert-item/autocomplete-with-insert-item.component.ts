import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevExtremeModule, DxSelectBoxComponent } from 'devextreme-angular';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-autocomplete-with-insert-item',
  templateUrl: './autocomplete-with-insert-item.component.html',
  styleUrl: './autocomplete-with-insert-item.component.scss',
})
export class AutocompleteWithInsertItemComponent implements OnInit {
  @ViewChild('selectBoxRef', { static: false })
  selectBox: DxSelectBoxComponent | undefined;
  @Input() DefaultValue: any;
  @Input() DataSource: any[];
  @Input() ValueExpr: string;
  @Input() DisplayExpr: string;
  @Input() Placeholder: any;
  @Input() Class: any;
  @Input() Label: any;
  @Input() ShowPopup: boolean = false;
  @Output() SetValue = new EventEmitter();

  readyForInsertItems = [];
  openPopupForm = false;
  initialText = '';

  popupFormData = {
    id: null,
    text: '',
    categoryId: null,
    category: '',
  };

  newFormButtonOptions = {
    width: '100%',
    text: ['افزودن'],
    type: 'default',
    stylingMode: 'contained',
    onClick: () => {
      this.openPopupForm = false;
      if (this.popupFormData.text && this.popupFormData.categoryId) {
        this.popupFormData.id = this.DataSource.length + 1;
        this.popupFormData.category = this.enums.Category.filter(
          (element) => element.id === this.popupFormData.categoryId
        )[0].text;

        this.DataSource.push(this.popupFormData);
        this.readyForInsertItems = this.readyForInsertItems.filter(
          (element) => element != this.initialText
        );
        this.SetValue.emit(this.popupFormData);
        this.popupFormData = {
          id: null,
          text: '',
          categoryId: null,
          category: '',
        };
        this.baseService.notify('آیتم جدید با موفقیت ثبت شد.', 'success');
      } else {
        this.baseService.notify('لطفا فرم را تکمیل کنید!', 'error');
      }
    },
  };

  closeFormButtonOptions = {
    width: '100%',
    text: 'انصراف',
    type: 'normal',
    stylingMode: 'contained',
    onClick: () => {
      this.openPopupForm = false;
      this.popupFormData = {
        id: null,
        text: '',
        categoryId: null,
        category: '',
      };
    },
  };

  enums: any = {
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

  constructor(private baseService: BaseService) {}

  ngOnInit() {}

  handleSelectOption(e: any) {
    if (e.selectedItem?.id) {
      this.SetValue.emit(e.selectedItem);
    }
  }

  handleAddToOptionsList(e: any) {
    if (e.event.target.value) {
      let foundedInDataSource = this.DataSource.findIndex(
        (element) => element.text === e.event.target.value
      );

      let foundedInList = this.readyForInsertItems.findIndex(
        (element) => element === e.event.target.value
      );

      if (foundedInDataSource === -1 && foundedInList === -1) {
        this.readyForInsertItems.push(e.event.target.value);
      } else {
        this.baseService.notify('آیتم در لیست وجود دارد.', 'error');
      }
      this.selectBox.instance.close();
      e.event.target.value = null;
    } else {
      this.baseService.notify('فیلد خالی است.', 'error');
    }
  }

  handleAddOption(field: any, item: any) {
    if (!this.ShowPopup) {
      field.push({ id: field.length + 1, text: item });
      this.readyForInsertItems = this.readyForInsertItems.filter(
        (element) => element != item
      );
      this.SetValue.emit(field[field.length - 1]);
      this.baseService.notify('آیتم جدید با موفقیت ثبت شد.', 'success');
    } else {
      this.openPopupForm = true;
      this.popupFormData.text = item;
      this.initialText = item;
    }
  }
}

@NgModule({
  imports: [CommonModule, DevExtremeModule],
  declarations: [AutocompleteWithInsertItemComponent],
  exports: [AutocompleteWithInsertItemComponent],
})
export class AutocompleteWithInsertItemModule {}
