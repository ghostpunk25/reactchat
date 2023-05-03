import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';

export const FooterLink = styled(Link)`
text-decoration: none;
color: ${p => p.theme.palette.colors.text};
`