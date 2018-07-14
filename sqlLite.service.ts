import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {Injectable} from '@angular/core';

interface insertion {

    fields: string,
    value: string

}

@Injectable()
export class SqlLiteService {

    constructor(private sqlite: SQLite) {


    }

    private db: SQLiteObject;

    /**
     *
     * @param {string} request
     */
    private createTables(request: string): void {

        this.db.executeSql(request, {})
            .then(() => {


            })
            .catch(e => console.log(e));


    }

    /**
     *
     * @param {Array<string>} requestTable
     * @param {string} databaseFileName
     */
    public createDataBase(requestTable: Array<string>, databaseFileName: string = 'data.db'): void {

        this.sqlite.create({
            name: databaseFileName,
            location: 'default'
        })
            .then((db: SQLiteObject) => {

                console.log('Bdd (' + databaseFileName + ') créée !');
                this.db = db;

                for (let i = 0; i < requestTable.length; i++) {

                    this.createTables(requestTable[i]);
                    console.log('Table 1 : ' + requestTable[i] + 'créée !');

                }


            })
            .catch(e => console.log(e));

    }

    /**
     *
     * @param {string} request
     */
    public req(request: string): void {

        this.db.executeSql(request, {})
            .then(() => {

                console.log('Request: ' + request);

            })
            .catch(e => console.log(e));

    }

    /**
     *
     * @param {string} table
     * @param {Array<insertion>} data
     */
    public insert(table:string, data: Array<insertion>): void {

        //let request = "INSERT INTO `" + table + "` (nom, adresse, ville, jour, heure, telephone, courriel, note ) VALUES('" + this.nomVisite + "','" + this.adresseVisite + "','" + this.villeVisite + "','" + this.jourVisite + "','" + this.heureVisite + "','" + this.telVisite + "','" + this.courrielVisite + "','" + this.noteVisite + "',)";
        let request = "INSERT INTO `" + table + "` ";

        // Loop fields
        let fields = '(';
        for (let i = 0; i < data.length; i++) {

            (i + 1 === data.length ? fields += data[i].fields : fields += data[i].fields + ',');


        }
        fields += ') ';
        request += fields;

        // Loop value
        let values = 'VALUES (';
        for (let j = 0; j < data.length; j++) {

            (j + 1 === data.length ? values += "'" + data[j].value + "'" : values += "'" + data[j].value + "',");

        }
        values += ')';
        request += values;

        this.req(request);

        console.log(request);

    }


}