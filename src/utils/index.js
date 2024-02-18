const mapDBtoModel = ({ id, title, body, tags, owner, created_at, updated_at }) => ({
  id,
  title,
  body,
  tags,
  owner,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBtoModel };
