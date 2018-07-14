# ionic-SQLite-easy Class
Easy use of Ionic sqlite.
This is a Ionic service.

## Quick start
Install and use this class quickly.

### Step 1: Install SQLite
```
$ ionic cordova plugin add cordova-sqlite-storage
$ npm install --save @ionic-native/sqlite
```

### Step 2: Download sqlLite.service.ts file and put it in your project

### Step 3: Import the service
```javascript
import {SqlLiteService} from "../../services/sqlLite.service"; // If the file is in a service folder

@Component({
    selector: 'page-example',
    templateUrl: 'example.html'
})
export class ExamplePage {

  constructor(private sqliteService: SqlLiteService) {
  
  }

}
```

### Step 4: Use ionic-SQLite-easy Class
For exemple:
```javascript
import {SqlLiteService} from "../../services/sqlLite.service"; // If the file is in a service folder

@Component({
    selector: 'page-example',
    templateUrl: 'example.html'
})
export class ExamplePage {

  constructor(private sqliteService: SqlLiteService) {
  
    sqliteService.createDataBase([
    
            'CREATE TABLE IF NOT EXISTS `people` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `name` TEXT NOT NULL, `address` TEXT NOT NULL, `information` TEXT)',
            'CREATE TABLE IF NOT EXISTS `animals` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `name` INTEGER NOT NULL, `color` TEXT NOT NULL )'
            
            ]);
  
  }
  
public insertNewAnimal() {
  
  sqliteService.insert('animals', [
  
    {
        fields:'name',
        value:'Fire'
    },
    
    {
        fields:'color',
        value:'black'
    },
    
]);
  
}

}
```

## Usage

* To **create** database
  * createDataBase(requestTable: Array<string>, databaseFileName: string = 'data.db'):void
    * Example
  
    ```javascript
    sqliteService.createDataBase([
    
            'CREATE TABLE IF NOT EXISTS `people` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `name` TEXT NOT NULL, `address` TEXT NOT NULL, `information` TEXT)',
            'CREATE TABLE IF NOT EXISTS `animals` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `name` INTEGER NOT NULL, `color` TEXT NOT NULL )'
            
            ]);
    ```
    
* To **insert**
  * insert(table:string, data: Array<insertion>): void 
    * Example
  
    ```javascript
    sqliteService.insert('animals', [
  
    {
        fields:'name',
        value:'Fire'
    },
    
    {
        fields:'color',
        value:'black'
    },
    
]);
```
    
  
    
  
