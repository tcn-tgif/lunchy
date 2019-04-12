import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const app = express();
const main = express();

const lunchesCollection = 'lunches';

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// webApi is your functions name, and you will pass main as 
// a parameter
// our url will be:
// 	https://idk.firebaseapp.com/api/v1/**
export const webApi = functions.https.onRequest(main);


// Add new lunch
app.post('/lunches', (req, res) => {
	// firebaseHelper.firestore
	// 	.createNewDocument(db, lunchesCollection, req.body);
	res.send('Create a new lunch');
})
// Update new lunch
app.patch('/lunches/:lunchId', (req, res) => {
	// firebaseHelper.firestore
	// 	.updateDocument(db, lunchesCollection, req.params.lunchId, req.body);
	res.send('Update a new lunch');
})
// View a lunch
app.get('/lunches/:lunchId', (req, res) => {
	// firebaseHelper.firestore
	// 	.getDocument(db, lunchesCollection, req.params.lunchId)
		// .then(doc => res.status(200).send(doc));
})

// View all lunches
app.get('/lunches', (req, res) => {
	// firebaseHelper.firestore
	// 	.backup(db, lunchesCollection)
		// .then(data => res.status(200).send(data))
})

// Delete a lunch 
app.delete('/lunches/:lunchId', (req, res) => {
	// firebaseHelper.firestore
	// 	.deleteDocument(db, lunchesCollection, req.params.lunchId);
	res.send('Document deleted');
})
