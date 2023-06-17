import { describe } from "node:test"

const express = require('express')
const router = require('../router')
const supertest = require('supertest')
const locationModel = require('../models/locationPointModel')

const Sequelize = require('sequelize')
const dbName = 'test'


describe('Integration tests', () => {

    const app = express()
    app.use(express.json())
    app.use(router)

    const request = supertest(app)

    beforeAll(async () => {
        const seqURL = new Sequelize('VibeMap', 'postgres', 'postgres', {
            host: 'localhost',
            dialect: 'postgres',
            port: 5432,
        });
    })
})