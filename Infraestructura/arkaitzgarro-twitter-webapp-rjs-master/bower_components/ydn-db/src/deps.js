// This file was autogenerated by calcdeps.py
goog.addDependency("../../../github-ydn-db/src/ydn/db/storage.js", ['ydn.db.Storage'], ['ydn.db.Query', 'ydn.db.sql.Storage', 'ydn.db.sql.Storage.inject', 'ydn.db.tr.Storage.inject_db', 'ydn.db.tr.events']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/algo/abstract_solver.js", ['ydn.db.algo.AbstractSolver'], ['goog.debug.Logger', 'ydn.db', 'ydn.db.Streamer']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/algo/algo.js", ['ydn.db.algo'], ['ydn.db.algo.NestedLoop', 'ydn.db.algo.SortedMerge', 'ydn.db.algo.ZigzagMerge']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/algo/exports.js", ['ydn.db.algo.exports'], ['ydn.db.algo.NestedLoop', 'ydn.db.algo.SortedMerge', 'ydn.db.algo.ZigzagMerge']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/algo/nested_loop.js", ['ydn.db.algo.NestedLoop'], ['ydn.db.algo.AbstractSolver']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/algo/sorted_merge.js", ['ydn.db.algo.SortedMerge'], ['ydn.db', 'ydn.db.algo.AbstractSolver']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/algo/zigzag_merge.js", ['ydn.db.algo.ZigzagMerge'], ['ydn.db']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/base.js", ['ydn.db.base', 'ydn.db.base.Transaction'], ['goog.async.Deferred', 'ydn.async.Deferred']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/db.js", ['ydn.db'], ['ydn.db.utils']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/error.js", ['ydn.db.ConstraintError', 'ydn.db.InternalError', 'ydn.db.InvalidKeyException', 'ydn.db.InvalidStateError', 'ydn.db.NotFoundError', 'ydn.db.ScopeError', 'ydn.db.SecurityError', 'ydn.db.TimeoutError', 'ydn.db.VersionError'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/events.js", ['ydn.db.events.RecordEvent', 'ydn.db.events.StorageEvent', 'ydn.db.events.StoreEvent', 'ydn.db.events.Types'], ['goog.events.Event']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/key.js", ['ydn.db.Key'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/key_range.js", ['ydn.db.IDBKeyRange', 'ydn.db.KeyRange'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/mutax.js", ['ydn.db.base.Mutex'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/request.js", ['ydn.db.Request', 'ydn.db.Request.Method'], ['goog.async.Deferred', 'goog.debug.Logger', 'ydn.db.base.Transaction']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/utils.js", ['ydn.db.utils'], ['ydn.db.base']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/where.js", ['ydn.db.Where'], ['goog.string', 'ydn.db.KeyRange', 'ydn.db.utils', 'ydn.debug.error.ArgumentException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/schema/database.js", ['ydn.db.schema.Database'], ['ydn.db.Key', 'ydn.db.schema.Store', 'ydn.db.schema.fulltext.Catalog']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/schema/editable_schema.js", ['ydn.db.schema.EditableDatabase'], ['ydn.db.schema.Database']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/schema/index.js", ['ydn.db.schema.DataType', 'ydn.db.schema.Index'], ['ydn.db.base', 'ydn.db.utils', 'ydn.debug.error.ArgumentException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/schema/store.js", ['ydn.db.schema.Store'], ['goog.array.ArrayLike', 'ydn.db.KeyRange', 'ydn.db.Request.Method', 'ydn.db.schema.Index']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/schema/fulltext/catalog.js", ['ydn.db.schema.fulltext.Catalog'], ['goog.array', 'ydn.db.schema.fulltext.Engine', 'ydn.db.schema.fulltext.InvIndex', 'ydn.debug.error.ArgumentException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/schema/fulltext/engine.js", ['ydn.db.schema.fulltext.Engine', 'ydn.db.schema.fulltext.ResultSet'], ['ydn.db.schema.fulltext.Entry']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/schema/fulltext/entry.js", ['ydn.db.schema.fulltext.Entry'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/base/schema/fulltext/invindex.js", ['ydn.db.schema.fulltext.InvIndex'], ['goog.array', 'ydn.debug.error.ArgumentException', 'ydn.json']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/exports.js", ['ydn.db.con.exports'], ['ydn.base.exports', 'ydn.db', 'ydn.db.con.Storage']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/i_database.js", ['ydn.db.con.IDatabase'], ['goog.async.Deferred']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/i_storage.js", ['ydn.db.con.IStorage'], ['goog.async.Deferred']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/indexed_db.js", ['ydn.db.con.IndexedDb'], ['goog.async.DeferredList', 'ydn.db', 'ydn.db.base', 'ydn.db.con.IDatabase', 'ydn.db.schema.Database', 'ydn.error.ConstraintError', 'ydn.json']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/storage.js", ['ydn.db.con.Storage'], ['ydn.db', 'ydn.db.base', 'ydn.db.con.IDatabase', 'ydn.db.con.IStorage', 'ydn.db.events.StorageEvent', 'ydn.db.schema.EditableDatabase', 'ydn.debug.error.ArgumentException', 'ydn.error.ConstraintError', 'ydn.object']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/websql.js", ['ydn.db.con.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'goog.functions', 'ydn.db.SecurityError', 'ydn.db.base', 'ydn.db.con.IDatabase', 'ydn.debug.error.NotImplementedException', 'ydn.json', 'ydn.string']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/simple/base.js", ['ydn.db.con.simple'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/simple/i_web_stroage.js", ['ydn.db.con.simple.IStorageProvider'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/simple/index_node.js", ['ydn.db.con.simple.Node'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/simple/memory_storage.js", ['ydn.db.req.InMemoryStorage'], ['ydn.db.con.simple.IStorageProvider']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/simple/simple_storage.js", ['ydn.db.con.SimpleStorage'], ['goog.asserts', 'goog.async.Deferred', 'ydn.db.Key', 'ydn.db.VersionError', 'ydn.db.con.IDatabase', 'ydn.db.con.simple', 'ydn.db.con.simple.IStorageProvider', 'ydn.db.con.simple.Store', 'ydn.db.con.simple.TxStorage', 'ydn.db.req.InMemoryStorage', 'ydn.debug.error.InternalError']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/simple/simple_storage_service.js", ['ydn.db.con.SimpleStorageService'], ['goog.async.Deferred', 'ydn.db.con.simple.IStorageProvider', 'ydn.db.con.simple.Store', 'ydn.db.req.InMemoryStorage', 'ydn.debug.error.InternalError']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/simple/store.js", ['ydn.db.con.simple.Store'], ['ydn.db.base', 'ydn.db.con.simple', 'ydn.db.con.simple.Node', 'ydn.structs.Buffer']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/simple/tx_storage.js", ['ydn.db.con.simple.TxStorage'], ['ydn.db.con.SimpleStorageService']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/simple/user_data.js", ['ydn.db.con.simple.UserData'], ['goog.storage.mechanism.IEUserData', 'ydn.db.base', 'ydn.db.con.SimpleStorage', 'ydn.db.con.simple.IStorageProvider']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/conn/simple/web_storage.js", ['ydn.db.con.LocalStorage', 'ydn.db.con.SessionStorage'], ['ydn.db.con.SimpleStorage']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/cursor.js", ['ydn.db.Cursor'], ['goog.debug.Logger', 'ydn.db', 'ydn.db.core.req.ICursor', 'ydn.debug.error.InternalError']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/exports.js", ['ydn.db.core.exports'], ['ydn.db.core.Storage']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/i_cursor_stream.js", ['ydn.db.con.ICursorStream'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/i_operator.js", ['ydn.db.core.IOperator'], ['ydn.db.crud.IOperator']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/idb_cursor_stream.js", ['ydn.db.con.IdbCursorStream'], ['goog.debug.Logger', 'ydn.db.con.ICursorStream', 'ydn.db.con.IStorage']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/inject.js", ['ydn.db.core.Storage.inject_executor'], ['ydn.db.core.Storage', 'ydn.db.core.req.IndexedDb', 'ydn.db.core.req.SimpleStore', 'ydn.db.core.req.WebSql']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/iterator.js", ['ydn.db.IndexIterator', 'ydn.db.IndexValueIterator', 'ydn.db.Iterator', 'ydn.db.Iterator.State', 'ydn.db.KeyIterator', 'ydn.db.ValueIterator'], ['goog.debug.Logger', 'goog.functions', 'ydn.db.Cursor', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.db.base', 'ydn.db.core.EquiJoin', 'ydn.db.core.req.ICursor', 'ydn.debug.error.ArgumentException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/join.js", ['ydn.db.core.EquiJoin'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/multi-iterator.js", ['ydn.db.MultiIterator'], ['goog.debug.Logger', 'goog.functions', 'ydn.db.Cursor', 'ydn.db.Iterator', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.db.base', 'ydn.db.core.EquiJoin', 'ydn.db.core.req.ICursor', 'ydn.debug.error.ArgumentException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/operator.js", ['ydn.db.core.DbOperator'], ['ydn.db.Iterator', 'ydn.db.algo.AbstractSolver', 'ydn.db.core.IOperator', 'ydn.db.core.req.IRequestExecutor', 'ydn.db.crud.DbOperator', 'ydn.debug.error.ArgumentException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/storage.js", ['ydn.db.core.Storage'], ['ydn.db.core.DbOperator', 'ydn.db.crud.Storage']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/streamer.js", ['ydn.db.Streamer'], ['ydn.db.con.IdbCursorStream', 'ydn.db.con.IStorage', 'ydn.db.Iterator', 'ydn.debug.error.ArgumentException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/req/abstract_cursor.js", ['ydn.db.core.req.AbstractCursor'], ['goog.Disposable', 'ydn.debug.error.InternalError']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/req/cached_websql_cursor.js", ['ydn.db.core.req.CachedWebsqlCursor'], ['ydn.db.core.req.AbstractCursor', 'ydn.db.core.req.ICursor']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/req/i_cursor.js", ['ydn.db.core.req.ICursor'], ['goog.disposable.IDisposable']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/req/i_request_executor.js", ['ydn.db.core.req.IRequestExecutor'], ['ydn.db.Streamer', 'ydn.db.core.req.AbstractCursor', 'ydn.db.crud.req.IRequestExecutor']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/req/idb_cursor.js", ['ydn.db.core.req.IDBCursor'], ['ydn.db.core.req.AbstractCursor', 'ydn.debug.error.InternalError']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/req/indexed_db.js", ['ydn.db.core.req.IndexedDb'], ['ydn.db.algo.AbstractSolver', 'ydn.db.core.req.IDBCursor', 'ydn.db.core.req.IRequestExecutor', 'ydn.db.crud.req.IndexedDb', 'ydn.error', 'ydn.json']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/req/simple_cursor.js", ['ydn.db.core.req.SimpleCursor'], ['ydn.db.base.Mutex', 'ydn.db.core.req.AbstractCursor', 'ydn.db.core.req.ICursor']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/req/simple_store.js", ['ydn.db.core.req.SimpleStore'], ['ydn.db.core.req.IRequestExecutor', 'ydn.db.core.req.SimpleCursor', 'ydn.db.crud.req.SimpleStore']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/req/websql.js", ['ydn.db.core.req.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'ydn.db.core.req.CachedWebsqlCursor', 'ydn.db.core.req.IRequestExecutor', 'ydn.db.core.req.WebsqlCursor', 'ydn.db.crud.req.WebSql', 'ydn.json']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/core/req/websql_cursor.js", ['ydn.db.core.req.WebsqlCursor'], ['ydn.db.core.req.AbstractCursor', 'ydn.db.core.req.ICursor']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/crud/exports.js", ['ydn.db.crud.exports'], ['ydn.db.Key', 'ydn.db.KeyRange', 'ydn.db.crud.Storage']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/crud/i_operator.js", ['ydn.db.crud.IOperator'], ['ydn.db.KeyRange', 'ydn.db.crud.req.RequestExecutor']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/crud/i_sync_operator.js", ['ydn.db.ISyncOperator'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/crud/inject.js", ['ydn.db.crud.Storage.inject_executor'], ['ydn.db.crud.Storage', 'ydn.db.crud.req.IndexedDb', 'ydn.db.crud.req.SimpleStore', 'ydn.db.crud.req.WebSql']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/crud/operator.js", ['ydn.db.crud.DbOperator'], ['goog.debug.Logger', 'ydn.db', 'ydn.db.ISyncOperator', 'ydn.db.Key', 'ydn.db.Request', 'ydn.db.crud.IOperator', 'ydn.db.tr.AtomicSerial', 'ydn.db.tr.DbOperator', 'ydn.db.tr.IThread', 'ydn.debug.error.ArgumentException', 'ydn.debug.error.NotSupportedException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/crud/storage.js", ['ydn.db.crud.Storage'], ['ydn.db.crud.DbOperator', 'ydn.db.crud.IOperator', 'ydn.db.crud.req.IRequestExecutor', 'ydn.db.events.RecordEvent', 'ydn.db.events.StoreEvent', 'ydn.db.tr.Storage', 'ydn.object']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/crud/req/i_request_executor.js", ['ydn.db.crud.req.IRequestExecutor', 'ydn.db.crud.req.ListType'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/crud/req/indexed_db.js", ['ydn.db.crud.req.IndexedDb'], ['goog.async.DeferredList', 'ydn.db.crud.req.IRequestExecutor', 'ydn.db.crud.req.RequestExecutor', 'ydn.error', 'ydn.json']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/crud/req/request_executor.js", ['ydn.db.crud.req.RequestExecutor'], ['goog.async.Deferred', 'goog.debug.Logger', 'ydn.db.InternalError', 'ydn.db.Key']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/crud/req/simple_store.js", ['ydn.db.crud.req.SimpleStore'], ['goog.asserts', 'goog.async.Deferred', 'ydn.db.ConstraintError', 'ydn.db.con.simple.Store', 'ydn.db.con.simple.TxStorage', 'ydn.db.crud.req.IRequestExecutor', 'ydn.db.crud.req.RequestExecutor']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/crud/req/websql.js", ['ydn.db.crud.req.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'ydn.db.Where', 'ydn.db.crud.req.IRequestExecutor', 'ydn.db.crud.req.RequestExecutor', 'ydn.json']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/query/exports.js", ['ydn.db.query.exports'], ['ydn.db.Query', 'ydn.db.core.Storage']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/query/query.js", ['ydn.db.Query'], ['ydn.db.core.Storage']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/exports.js", ['ydn.db.sql.exports'], ['ydn.db.sql.Storage']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/i_storage.js", ['ydn.db.sql.IStorage'], ['ydn.db.sql.req.IRequestExecutor', 'ydn.db.core.IOperator']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/inject.js", ['ydn.db.sql.Storage.inject'], ['ydn.db.core.Storage', 'ydn.db.sql.req.IndexedDb', 'ydn.db.sql.req.SimpleStore', 'ydn.db.sql.req.WebSql']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/operator.js", ['ydn.db.sql.DbOperator'], ['ydn.db.Iterator', 'ydn.db.core.DbOperator', 'ydn.db.sql.IStorage', 'ydn.db.sql.req.IRequestExecutor', 'ydn.db.sql.req.IndexedDb', 'ydn.db.sql.req.WebSql', 'ydn.db.sql.req.SimpleStore', 'ydn.debug.error.ArgumentException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/sql.js", ['ydn.db.Sql'], ['goog.functions', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.db.schema.Database', 'ydn.db.sql.req.IdbQuery', 'ydn.error.ArgumentException', 'ydn.math.Expression', 'ydn.string']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/storage.js", ['ydn.db.sql.Storage'], ['ydn.db.core.Storage', 'ydn.db.sql.DbOperator']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/req/i_request_executor.js", ['ydn.db.sql.req.IRequestExecutor'], ['ydn.db.Sql', 'ydn.db.Streamer', 'ydn.db.crud.req.IRequestExecutor']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/req/idb_query.js", ['ydn.db.sql.req.IdbQuery'], ['ydn.db.sql.req.IterableQuery', 'goog.functions', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.error.ArgumentException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/req/indexed_db.js", ['ydn.db.sql.req.IndexedDb'], ['ydn.db.core.req.IndexedDb', 'ydn.db.sql.req.IRequestExecutor', 'ydn.db.sql.req.nosql.Node', 'ydn.db.sql.req.nosql.ReduceNode']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/req/iterable_query.js", ['ydn.db.sql.req.IterableQuery'], ['ydn.db.Iterator', 'goog.functions', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.error.ArgumentException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/req/simple_store.js", ['ydn.db.sql.req.SimpleStore'], ['ydn.db.core.req.SimpleStore', 'ydn.db.sql.req.IRequestExecutor', 'ydn.db.sql.req.nosql.Node', 'ydn.db.sql.req.nosql.ReduceNode']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/req/sql_old.js", ['ydn.db.Sql_'], ['goog.functions', 'ydn.db.KeyRange', 'ydn.db.schema.Database', 'ydn.error.ArgumentException', 'ydn.db.sql.req.IdbQuery', 'ydn.math.Expression', 'ydn.string']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/req/sql_query.js", ['ydn.db.sql.req.SqlQuery'], ['ydn.db.sql.req.IterableQuery', 'goog.functions', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.error.ArgumentException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/req/websql.js", ['ydn.db.sql.req.WebSql'], ['ydn.db.core.req.WebSql', 'ydn.db.sql.req.SqlQuery', 'ydn.db.sql.req.IRequestExecutor', 'ydn.db.sql.req.websql.Node', 'ydn.db.sql.req.websql.ReduceNode']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/req/nosql/node.js", ['ydn.db.sql.req.nosql.Node'], ['ydn.db.Iterator', 'ydn.db.KeyRange', 'ydn.db.Sql', 'ydn.error.ArgumentException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/req/nosql/reduce_node.js", ['ydn.db.sql.req.nosql.ReduceNode'], ['ydn.db.sql.req.nosql.Node', 'ydn.object']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/req/websql/node.js", ['ydn.db.sql.req.websql.Node'], ['ydn.db.Sql', 'ydn.db.schema.Store']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/sql/req/websql/reduce_node.js", ['ydn.db.sql.req.websql.ReduceNode'], ['ydn.db.sql.req.websql.Node', 'ydn.object']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/tr/atomic_parallel.js", ['ydn.db.tr.AtomicParallel'], ['ydn.db.tr.IThread', 'ydn.db.tr.Parallel', 'ydn.debug.error.NotSupportedException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/tr/atomic_serial.js", ['ydn.db.tr.AtomicSerial'], ['ydn.db.tr.IThread', 'ydn.db.tr.Serial', 'ydn.debug.error.NotSupportedException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/tr/event_installer.js", ['ydn.db.tr.events'], ['goog.debug.ErrorHandler', 'goog.events', 'goog.events.EventHandler', 'goog.events.EventTarget', 'goog.events.EventWrapper', 'ydn.db.tr.Storage']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/tr/events_exports.js", ['ydn.db.tr.events.exports'], ['ydn.db.tr.events']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/tr/i_thread.js", ['ydn.db.tr.IThread', 'ydn.db.tr.IThread.Policy'], ['ydn.db.Request']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/tr/inject.js", ['ydn.db.tr.Storage.inject_db'], ['ydn.db.con.IndexedDb', 'ydn.db.con.LocalStorage', 'ydn.db.con.SessionStorage', 'ydn.db.con.SimpleStorage', 'ydn.db.con.WebSql', 'ydn.db.tr.Storage']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/tr/mutex.js", ['ydn.db.tr.Mutex'], ['goog.array', 'goog.asserts', 'ydn.db.InvalidStateError']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/tr/operator.js", ['ydn.db.tr.DbOperator'], ['ydn.db.crud.IOperator', 'ydn.db.tr.AtomicSerial', 'ydn.db.tr.IThread', 'ydn.debug.error.NotSupportedException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/tr/parallel.js", ['ydn.db.tr.Parallel'], ['ydn.db.tr.IThread', 'ydn.db.tr.ParallelTxExecutor', 'ydn.debug.error.NotSupportedException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/tr/parallel_tx_executor.js", ['ydn.db.tr.ParallelTxExecutor'], ['ydn.debug.error.InternalError']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/tr/serial.js", ['ydn.db.tr.Serial'], ['ydn.db.tr.IThread', 'ydn.db.tr.Mutex', 'ydn.debug.error.NotSupportedException']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/tr/storage.js", ['ydn.db.tr.Storage'], ['ydn.db.con.Storage', 'ydn.db.tr.AtomicParallel', 'ydn.db.tr.AtomicSerial', 'ydn.db.tr.DbOperator', 'ydn.db.tr.Parallel', 'ydn.db.tr.Serial']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/utils/reader.js", ['ydn.db.io.Reader'], []);
goog.addDependency("../../../github-ydn-db/src/ydn/db/utils/shoper.js", ['ydn.Shoper'], ['ydn.Hi']);
goog.addDependency("../../../github-ydn-db/src/ydn/db/utils/test_utils.js", ['ydn.db.test'], ['ydn.db.io.QueryService']);
