class FilterController {
  constructor() {
    this.field = '';
    this.value = '';
  }

  filter() {
    const filter = {};
    filter[this.field] = this.value
    return filter;
  }
}

angular.module('filterSearch',[])
.component('filterSearch',{
  controller: FilterController,
  template:
    `<div class="filterSearch">
        <select class="filterSearch__options" ng-model="$ctrl.field">
          <option value="" disabled selected translate="FILTER"></option>
          <option value="author" value="author" translate="FILTERI"></option>
          <option value="title" value="title" translate="FILTERII"></option>
        </select>
        <input class="filterSearch__query"   translate translate-attr-placeholder="QUERY" ng-model="$ctrl.value" ng-blur="$ctrl.onChange({filter: $ctrl.filter()})">
        <button class="filterSearch__btn" type="button" name="button" ng-click="$ctrl.onSubmit()">
          <img src="../../data/assets/search.svg" alt="searchImg">'
        </button>
    </div>`,
  bindings: {
    onChange: '&',
    onSubmit: '&'
  }
})
