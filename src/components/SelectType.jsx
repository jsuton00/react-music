import React from 'react';
import { ENTITY_TYPE_OPTIONS } from '../constants/selectOptions';

const SelectType = () => {
	return (
		<select
			id="select-entityTypes"
			name="select-entityTypes"
			type="select"
			className="select"
		>
			{ENTITY_TYPE_OPTIONS.length > 0 &&
				ENTITY_TYPE_OPTIONS.map((o, i) => {
					return (
						<option key={i} id={i} value={o} className="select-option">
							{o}
						</option>
					);
				})}
		</select>
	);
};

export default SelectType;
