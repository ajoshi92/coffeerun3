//var ds = new App.DataStore();

QUnit.test('hello test', function(assert) {
    assert.ok(1 == '1', 'Passed!');
});

QUnit.test('DataStore function', function(assert) {
    assert.ok(window, 'running the DataStore function');
    var ds = new App.DataStore();
    console.log('ds is created\n');
    console.log(App.ds);
    assert.ok(ds.data, 'DS object created');
    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');
    assert.ok(ds.add, "Added ");
    assert.deepEqual(ds.getAll(), {
        'm@bond.com': 'tea',
        'james@bond.com': 'eshpressho'
    }, "getAll function");
    console.log(ds.getAll());
    ds.remove('m@bond.com');
    console.log("removed");
    assert.ok(ds.remove, "remove function");
    assert.equal(ds.get('james@bond.com'), 'eshpressho');
    ds.get('m@bond.com');
    console.log(ds.get('james@bond.com'));
    console.log(ds.get('m@bond.com'));
});

// QUnit test functions for Truck DataStore
QUnit.test('createOrderTest ok test', function(assert) {
    var order = {
        emailAddress: 'abc@bond.com',
        coffee: 'decaf'
    };
    assert.deepEqual(myTruck.createOrderTest(order), order, 'Passed!');
});

QUnit.test('printOrdersTest ok test', function(assert) {
    assert.equal(myTruck.printOrdersTest(),Object.keys(myTruck.db.data).length, 'Passed!');
});

QUnit.test('printOrdersTest ok test', function(assert) {
    assert.equal(myTruck.deliverOrderTest('abc@bond.com'), undefined, 'Passed!');
});





//
