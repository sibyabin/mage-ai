SQL_SOURCES = [
    dict(name='BigQuery'),
    dict(
        name='Microsoft SQL Server',
        uuid='mssql',
    ),
    dict(name='MySQL'),
    dict(name='OracleDB'),
    dict(name='PostgreSQL'),
    dict(name='Redshift'),
    dict(name='Snowflake'),
]

SOURCES = sorted([
    dict(name='Amazon S3'),
    dict(name='Amplitude'),
    dict(name='Api'),
    dict(name='Azure Blob Storage'),
    dict(name='Chargebee'),
    dict(name='Commercetools'),
    dict(name='Couchbase'),
    dict(name='Datadog'),
    dict(name='DynamoDB'),
    dict(name='Facebook Ads'),
    dict(name='Freshdesk'),
    dict(name='Front'),
    dict(name='GitHub'),
    dict(name='Google Ads'),
    dict(name='Google Analytics'),
    dict(name='Google Search Console'),
    dict(name='Google Sheets'),
    dict(name='HubSpot'),
    dict(name='Intercom'),
    dict(name='Knowi'),
    dict(name='LinkedIn Ads'),
    dict(name='Monday'),
    dict(name='MongoDB'),
    dict(name='Mode'),
    dict(name='Outreach'),
    dict(name='Paystack'),
    dict(name='Pipedrive'),
    dict(name='Postmark'),
    dict(name='PowerBI'),
    dict(name='Salesforce'),
    dict(name='Sftp'),
    dict(name='Stripe'),
    dict(name='Twitter Ads'),
    dict(name='Zendesk'),
] + SQL_SOURCES, key=lambda x: x['name'])
