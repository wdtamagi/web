import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    border: 'none',
    marginRight: 32,
    fontSize: 16,
    textDecoration: 'none',
    color: ({ active }) =>
      active ? theme.palette.primary.dark : theme.palette.primary.greyDarken3,
    fontWeight: 600,
    '&:last-child': { marginRight: 0 },
    '&:hover': { cursor: 'pointer' }
  },
  image: { marginRight: 8 }
}));
