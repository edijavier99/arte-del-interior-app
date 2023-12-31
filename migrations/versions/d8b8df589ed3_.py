"""empty message

Revision ID: d8b8df589ed3
Revises: 326fa1d56ff3
Create Date: 2023-11-01 13:35:47.173879

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd8b8df589ed3'
down_revision = '326fa1d56ff3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('item',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=False),
    sa.Column('category', sa.Enum('colchones', 'canapes', 'cabeceros', 'armarios', 'sofas', 'mesas', 'sillas', 'packs', name='myenum'), nullable=True),
    sa.Column('description', sa.String(length=1000), nullable=False),
    sa.Column('location', sa.String(length=250), nullable=True),
    sa.Column('publishing_date', sa.String(length=10), nullable=False),
    sa.Column('image', sa.String(length=2000), nullable=True),
    sa.Column('counter', sa.Integer(), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.Column('profundidad', sa.Integer(), nullable=True),
    sa.Column('capacidad', sa.Integer(), nullable=True),
    sa.Column('altura', sa.Integer(), nullable=True),
    sa.Column('grosor', sa.Integer(), nullable=True),
    sa.Column('firmeza', sa.Integer(), nullable=True),
    sa.Column('color', sa.String(), nullable=True),
    sa.Column('ancho', sa.Integer(), nullable=True),
    sa.Column('longitud', sa.Integer(), nullable=True),
    sa.Column('codigo', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=40), nullable=False))
        batch_op.add_column(sa.Column('surname', sa.String(length=40), nullable=False))
        batch_op.add_column(sa.Column('image', sa.String(length=300), nullable=False))
        batch_op.add_column(sa.Column('location', sa.String(length=40), nullable=False))
        batch_op.add_column(sa.Column('carrito', sa.ARRAY(sa.String(length=400)), nullable=True))
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=1000),
               existing_nullable=False)
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
        batch_op.alter_column('password',
               existing_type=sa.String(length=1000),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.drop_column('carrito')
        batch_op.drop_column('location')
        batch_op.drop_column('image')
        batch_op.drop_column('surname')
        batch_op.drop_column('name')

    op.drop_table('item')
    # ### end Alembic commands ###
