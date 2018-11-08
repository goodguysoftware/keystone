import React from 'react';

import ItemsTableCell from '../../components/ItemsTableCell';
import ItemsTableValue from '../../components/ItemsTableValue';
import ImageThumbnail from '../../components/ImageThumbnail';

var LocalFileColumn = React.createClass({
	renderValue: function () {
		var value = this.props.data.fields[this.props.col.path];
		if (!value || !value.filename) return;
		return value.filename;
	},
	render: function () {
		var value = this.props.data.fields[this.props.col.path];
		var href = value && value.url ? value.url : null;
		var label = value && value.filename ? value.filename : null;
		if (value && value.mimetype && value.mimetype.indexOf('image/') >= 0)
			return (
				<ImageThumbnail
					component="a"
					href={href}
					target="__blank"
					style={{ marginRight: '1em', maxWidth: '50%' }}
				>
					<img src={href} style={{ 'max-height': 60, 'max-width': '100%' }} />
				</ImageThumbnail>
			)
		else
			return (
				<ItemsTableCell href={href} padded interior field={this.props.col.type}>
					<ItemsTableValue>{label}</ItemsTableValue>
				</ItemsTableCell>
			);
	},
});

module.exports = LocalFileColumn;
