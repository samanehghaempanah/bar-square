import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { GoodModel } from 'src/app/shared/definitions/models/entities.model';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
})
export class GoodsComponent implements OnInit {
  @ViewChild('dataGridRef', { static: false }) dataGrid:
    | DxDataGridComponent
    | undefined;

  constructor(public baseService: BaseService) {}

  pageData = {
    showPopUpForm: false,
    popUpFormMode: '' as 'insert' | 'edit',
    popUpFormTitle: '',
  };

  customizeColumns(columns: any) {
    columns[9].width = '40px';
    columns[10].width = '40px';

    columns[0].caption = 'ردیف';
    columns[1].caption = 'نوع جنس';
    columns[2].caption = 'دسته بندی';
    columns[3].caption = 'نام جنس';
    columns[4].caption = 'برند';
    columns[5].caption = 'کیفیت';
    columns[6].caption = 'بسته بندی';
    columns[7].caption = 'وزن ظرف';
    columns[8].caption = 'درصد افت';

    columns[9].cssClass = 'p-0';
    columns[10].cssClass = 'p-0';

    columns[0].alignment = 'center';
    columns[1].alignment = 'center';
    columns[2].alignment = 'center';
    columns[3].alignment = 'center';
    columns[4].alignment = 'center';
    columns[5].alignment = 'center';
    columns[6].alignment = 'center';
    columns[7].alignment = 'center';
    columns[8].alignment = 'center';
    columns[9].alignment = 'center';
    columns[10].alignment = 'center';
  }

  goods: GoodModel[] = [
    {
      GoodId: 100,
      Type: 1,
      Category: 1,
      Name: 'موز سبدی پریما - فروشگاه 1',
      Brand: 1,
      Quality: 1,
      Packing: 1,
      Weight: 10,
      PercentageDrop: 10,
    },
    {
      GoodId: 200,
      Type: 2,
      Category: 2,
      Name: 'کاهو کارتونی احسان - فروشگاه 2',
      Brand: 2,
      Quality: 2,
      Packing: 2,
      Weight: 20,
      PercentageDrop: 20,
    },
    {
      GoodId: 300,
      Type: 3,
      Category: 3,
      Name: 'نعنا 12 تایی برند 3 - فروشگاه 3',
      Brand: 3,
      Quality: 3,
      Packing: 3,
      Weight: 30,
      PercentageDrop: 30,
    },
    {
      GoodId: 400,
      Type: 4,
      Category: 4,
      Name: 'دراگون 15 تایی برند 4 - فروشگاه 4',
      Brand: 4,
      Quality: 4,
      Packing: 4,
      Weight: 40,
      PercentageDrop: 40,
    },
  ];

  formData: GoodModel = {
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
  };

  ngOnInit(): void {
    // this.loadEnums();
    // this.loadData();
  }

  // Service Functions

  // async loadEnums() {
  //   try {
  //     this.baseService.loading = true;
  //     let model = {
  //       "spName": "Base.Enum_Select",
  //       "inputParameter": JSON.stringify([{ "CategoryID": 100, "KeyID": 1001 }, { "CategoryID": 100, "KeyID": 1002 }, { "CategoryID": 100, "KeyID": 1003 }, { "CategoryID": 100, "KeyID": 1004 }, { "CategoryID": 100, "KeyID": 1005 }, { "CategoryID": 100, "KeyID": 1006 }, { "CategoryID": 100, "KeyID": 1007 }, { "CategoryID": 100, "KeyID": 1008 }, { "CategoryID": 100, "KeyID": 1009 }])
  //     };
  //     let result: any = await this.baseService.httpPOST('ApiBase/modification', model, true);
  //     if (result.isSuccess) {
  //       this.enumsList = JSON.parse(result.data.data);
  //       this.enum.unit = this.enumsList.filter((item: any) => item.KeyID === EnumType.Unit)[0];
  //       console.log("enum", this.enum);
  //       result.message ?? this.baseService.notify(result.message, "success");
  //       this.baseService.loading = false;
  //     }
  //     else {
  //       this.baseService.notify("خطا در لود لیست Enum ها!", "error");
  //       result.message ?? this.baseService.notify(result.message, "error");
  //       this.baseService.loading = false;
  //     }
  //   }
  //   catch { }
  //   this.baseService.loading = false;
  // }

  // // async loadData() {
  // //   try {
  // //     this.baseService.loading = true;
  // //     let model = {
  // //       "spName": "Warehouse.Good_Select",
  // //       "inputParameter": ''
  // //     };
  // //     let result = await this.baseService.API(model);
  // //     if (result.isSuccess) {
  // //       this.receipts = JSON.parse(result.data.data);
  // //       console.log("input receipts:", this.receipts);
  // //       result.message ?? this.baseService.notify(result.message, "success");
  // //       this.baseService.loading = false;
  // //     }
  // //     else {
  // //       this.baseService.notify("خطا در نمایش لیست حواله های ورود مواد اولیه!", "error");
  // //       result.message ?? this.baseService.notify(result.message, "error");
  // //       this.baseService.loading = false;
  // //     }
  // //   }
  // //   catch { }
  // //   this.baseService.loading = false;
  // // }

  onNewGood(data: any) {
    this.formData = data;
    let newId = this.goods[this.goods.length - 1].GoodId + 1;
    this.formData.GoodId = newId;
    this.formData.Category =
      this.enums.Type[this.formData.Type - 1]?.categoryId;
    this.formData.Name =
      this.enums.Type[this.formData.Type - 1]?.text +
      ' ' +
      this.enums.Packing[this.formData.Packing - 1]?.text +
      ' ' +
      this.enums.Brand[this.formData.Brand - 1]?.text +
      ' - ' +
      this.formData.Name;
    this.goods.push(this.formData);
    this.pageData.showPopUpForm = false;
    this.formData = new GoodModel();
    this.baseService.notify('جنس جدید با موفقیت ثبت شد.', 'success');
    // this.baseService.loading = true;
    // try {
    //   let model = {
    //     spName: 'Warehouse.Good_Modification',
    //     inputParameter: JSON.stringify(this.formData),
    //   };
    //   let result = await this.baseService.API(model);
    //   if (result.isSuccess) {
    //     this.baseService.notify('جنس جدید با موفقیت ثبت شد.', 'success');
    //     result.message ?? this.baseService.notify(result.message, 'success');
    //     this.formData = new GoodModel();
    //     this.baseService.loading = false;
    //   } else {
    //     this.baseService.notify('خطا در ثبت جنس جدید!', 'error');
    //     result.message ?? this.baseService.notify(result.message, 'error');
    //     this.baseService.loading = false;
    //   }
    // } catch {}
    // this.baseService.loading = false;
  }

  onEditGood(data: any) {
    this.formData = data;
    this.formData.Category = this.enums.Type[this.formData.Type - 1].categoryId;
    this.formData.Name =
      this.enums.Type[this.formData.Type - 1]?.text +
      ' ' +
      this.enums.Packing[this.formData.Packing - 1]?.text +
      ' ' +
      this.enums.Brand[this.formData.Brand - 1]?.text +
      ' - ' +
      this.formData.Name;
    this.goods.find((item) => item.GoodId === this.formData.GoodId)[0] =
      this.formData;
    this.pageData.showPopUpForm = false;
    this.baseService.notify('جنس جدید با موفقیت ویرایش شد.', 'success');
    // this.pageData.formMode = 'insert';
    // this.baseService.loading = true;
    // try {
    //   let model = {
    //     spName: 'Warehouse.Good_Modification',
    //     inputParameter: JSON.stringify(this.formData),
    //   };
    //   let result = await this.baseService.API(model);
    //   if (result.isSuccess) {
    //     this.baseService.notify('جنس جدید با موفقیت ثبت شد.', 'success');
    //     result.message ?? this.baseService.notify(result.message, 'success');
    //     this.formData = new GoodModel();
    //     this.baseService.loading = false;
    //   } else {
    //     this.baseService.notify('خطا در ثبت جنس جدید!', 'error');
    //     result.message ?? this.baseService.notify(result.message, 'error');
    //     this.baseService.loading = false;
    //   }
    // } catch {}
    // this.baseService.loading = false;
  }

  //Other Functions
  focusedRowChanged(e: any) {
    this.formData = e.row.data;
  }

  // onRowInserting(e) {
  //   // debugger;
  //   let newId = this.goods[this.goods.length - 1].GoodId + 1;
  //   Promise.resolve(this.dataGrid.instance.saveEditData()).finally(() => {
  //     this.goods[this.goods.length - 1].GoodId = newId;
  //     this.goods[this.goods.length - 1].Name =
  //       this.enums.Type[e.data.Type - 1].text +
  //       ' ' +
  //       this.enums.Packing[e.data.Packing - 1].text +
  //       ' - ' +
  //       e.data.Name;
  //   });
  //   this.baseService.notify('جنس جدید با موفقیت ثبت شد.', 'success');
  // }

  onRowUpdating(e) {
    e.data.Name =
      this.enums.Type[e.data.Type - 1].text +
      ' ' +
      this.enums.Packing[e.data.Packing - 1].text +
      ' - ' +
      e.data.Name;

    e.data.Category = this.enums.Type[e.data.Type - 1].categoryId;

    Promise.resolve(this.dataGrid.instance.saveEditData()).finally(() => {
      this.goods.find((item) => item.GoodId === e.data.GoodId)[0] = e.data;
    });
    this.baseService.notify('جنس جدید با موفقیت ویرایش شد.', 'success');
  }

  onRowRemoving(e) {
    this.baseService
      .dialog('اخطار', 'آیا از حذف جنس موردنظر اطمینان دارید؟')
      .then((dialogResult: any) => {
        if (dialogResult) {
          this.goods = this.goods.filter(
            (element) => element.GoodId != e.data.GoodId
          );
        }
      });
    e.cancel = true;
  }

  //Handle Functions
  handleRowNumber(data: any) {
    return data.rowIndex + 1;
  }

  handleNewGood() {
    this.formData = new GoodModel();
    this.pageData.showPopUpForm = true;
    this.pageData.popUpFormMode = 'insert';
    this.pageData.popUpFormTitle = 'مشخصات جنس جدید';
  }

  handleEditGood(e: any) {
    if (e.event.keyCode === 13) {
      this.formData.Name = this.formData.Name.split(' - ')[1];
      this.pageData.showPopUpForm = true;
      this.pageData.popUpFormMode = 'edit';
      this.pageData.popUpFormTitle = 'ویرایش مشخصات جنس';
    }
  }

  handleChangeGood(method: 'edit' | 'delete', item: any = null) {
    if (method === 'edit' && item) {
      this.formData = item;
      this.formData.Name = this.formData.Name?.split(' - ')[1];
      this.pageData.showPopUpForm = true;
      this.pageData.popUpFormMode = 'edit';
      this.pageData.popUpFormTitle = 'ویرایش مشخصات جنس';
    } else if (method === 'delete' && item) {
      this.baseService
        .dialog('اخطار', 'آیا از حذف جنس موردنظر اطمینان دارید؟')
        .then((dialogResult: any) => {
          if (dialogResult) {
            this.goods = this.goods.filter(
              (element) => element.GoodId != item.GoodId
            );
          }
        });
    }
  }
}
