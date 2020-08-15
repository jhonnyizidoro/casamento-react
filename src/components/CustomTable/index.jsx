import React from 'react'

import CustomContainer from '../CustomContainer'

import { CustomTableTitle, CustomTableContainer, CustomTableRow, CustomTableColumn } from './styles'

const CustomTable = ({ title, labels, items }) => (
	<CustomContainer>
		<CustomTableTitle>{title}</CustomTableTitle>
		<CustomTableContainer>
			<CustomTableRow>
				{
					labels.map((label, index) => <CustomTableColumn key={index}>{label}</CustomTableColumn>)
				}
			</CustomTableRow>
			{
				items.map((itemArray, index) => <CustomTableRow key={index}>
					{
						itemArray.map((item, index) => <CustomTableColumn key={index}>{item}</CustomTableColumn>)
					}
				</CustomTableRow>)
			}
		</CustomTableContainer>
	</CustomContainer>
)

export default CustomTable