//comment to fix problem
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();

import db from '../database/initializeDB.js';

import trackQueryAll from '../controllers/tracklist_queryAll.js'
import trackInsertQuery from '../controllers/tracklist_post_query.js'
import trackDeleteQuery from '../controllers/tracklist_delete_query.js'


router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched tracksRoute get');
      const result = await db.sequelizeDB.query(trackQueryAll, {
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (error) {
      console.log('Touched tracksRoute get error', error);
      res.json({message: 'error in tracksRoute'});
    }
  })

  .post(async (req, res) => {
    try {
      console.dir(req.body, {depth: null});
      console.log(req.body?.tname);
      const songName = req.body?.tname || '';
      const result = await db.sequelizeDB.query(trackInsertQuery, {
        replacements: {track_name: songName},
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
      
    } catch (err) {
      console.log(err);
      res.send({message: err})
    }
  })

  .put((req, res) => {

  })
  .delete((req, res) => {

  });

export default router;