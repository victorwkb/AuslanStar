import numpy as np
import lancedb

db = lancedb.connect("s3://auslan-data-lake-bucket/transformed-lancedb-data/lancedb")
table = db.open_table("vectorstore")

def handler(event, context):
    status_code = 200

    table_df = table.to_pandas().head()

    print(table_df[0])

    # assert table_df not empty
    assert not table_df.empty

    return {
        "statusCode": status_code,
    }
