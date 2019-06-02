import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
//  https://stackblitz.com/angular/yvlybrpebod?file=app%2Fautocomplete-optgroup-example.ts

interface SearchGroup {
  name: string;
  items: string[];
}

const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-searchable-selector',
  templateUrl: './searchable-selector.component.html',
  styleUrls: ['./searchable-selector.component.scss']
})
export class SearchableSelectorComponent implements OnInit {
  searchGroupOptions: SearchGroup[] =[];

  constructor() { }

  ngOnInit() {
    
  }

  searchChange(value: string) {
    this.searchGroupOptions = this.filterGroups(value);
  }

  private filterGroups(value: string): SearchGroup[] {
    if (value) {
      const groups = this.searchGroups
        .map(group => ({ 
            name: group.name, 
            items: this.filterItems(group.items, value)
          }))
      console.log("groups", groups);

      const groupsWithLinks = groups.filter(group => group.items.length > 0);

      console.log("groups with links", groupsWithLinks);

      return this.searchGroups
        .map(group => ({ 
            name: group.name, 
            items: this.filterItems(group.items, value)
          }))
        .filter(group => group.items.length > 0);
    }
  }

  filterItems(items: string[], value: string): string[]  {
    const filterValue = value.toLowerCase();
    return items.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
  }

  searchGroups: SearchGroup[] = [
    {
      name: "Forms",
      items:  ["Link 1", "Link 2", "Link 3"]
    },
    {
      name: "Routing",
      items:  ["Link 1", "Link 2", "Link 3"]
    },
    {
      name: "Net Basal",
      items:  ["Pass Data when Routing"]
    },
    {
      name: "Todd Motto",
      items:  ["Link 1"]
    },
    {
      name: "CSS Tricks",
      items:  ["Link 1"]
    },
    {
      name: "Helpful Links",
      items:  ["RXJS", "Javascript/Typescript", "Event Loop"]
    },
  ]
}
