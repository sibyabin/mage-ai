"""Add last_enabled_at to pipeline schedule

Revision ID: 03135dd2b4be
Revises: 9f3b46404196
Create Date: 2024-01-17 15:04:16.245012

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '03135dd2b4be'
down_revision = '9f3b46404196'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('pipeline_schedule', schema=None) as batch_op:
        batch_op.add_column(sa.Column('last_enabled_at', sa.DateTime(timezone=True), nullable=True))

    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('pipeline_schedule', schema=None) as batch_op:
        batch_op.drop_column('last_enabled_at')

    # ### end Alembic commands ###
