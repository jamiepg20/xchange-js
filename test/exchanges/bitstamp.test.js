const nock = require('nock');
const chai = require('chai');
const bitstamp = require('../../lib/exchanges/bitstamp');

const should = chai.should();
const expect = chai.expect

const client = new bitstamp.PublicClient();
const rootUrl = client.publicURI;

const testResponses = {
	ticker: {
		body: {
                "high": "1192.50",
                "last": "1181.40",
                "timestamp": "1492456833",
                "bid": "1178.55",
                "vwap": "1178.25",
                "volume": "3300.97957797",
                "low": "1161.00",
                "ask": "1181.39",
                "open": "1162.31"
            },
		response: {
			last: 1181.40,
			high: 1192.50,
			low: 1161.00,
			bid: 1178.55,
			ask: 1181.39,
			volume: 3300.97957797,
			time: new Date(1492456833*1000)
		}
		
	},
	symbols: {
		body: [
		"btcusd",
		"ltcusd",
		"ltcbtc"
		],
		response: [
		"BTCUSD",
		"LTCUSD",
		"LTCBTC"
		]
	}
};

nock(rootUrl)
.get('/ticker/BTCUSD/')
.twice()
.reply(200, testResponses.ticker.body);

describe('bitstamp', function () {

	describe('ticker', function () {

		context('success call', function () {
			it('retrieves ticker data using cb', function (done) {
				client.getTicker('BTCUSD', function (err, resp) {
					expect(resp).to.deep.equal(testResponses.ticker.response);
					done();
				});
			});

			it('retrieves ticker using promise', function (done) {
				client.getTicker('BTCUSD').then((resp) => {
					expect(resp).to.deep.equal(testResponses.ticker.response);
					done();
				});
			});
		});

	});

	describe('pairs', function () {

		context('success call', function () {
			it('retrieves pairs data using cb', function (done) {
				client.getPairs(function (err, resp) {
					expect(resp).to.deep.equal(client.pairs);
					done();
				});
			});

			it('retrieves pairs using promise', function (done) {
				client.getPairs().then((resp) => {
					expect(resp).to.deep.equal(client.pairs);
					done();
				});
			});
		});

	});

});