import React from 'react'
import { Link } from 'react-router-dom'
import { TOCLink, TOCNodes } from 'store/cccTypedefs'
import { PageMetaMap } from 'cccMetaGenerator/makePageMetaMap'
import { Layout } from '../Layout/Layout'
import { makeStyles } from '@material-ui/core'
import { AppRouteType } from 'components/App'

const useStyles = makeStyles({
  ul: {
    paddingLeft: 20,
    lineHeight: 1.5,
    '& ul': {
      paddingLeft: 20,
    },
    '& li:last-child': {
      marginBottom: 10,
    },
  },
})

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TableOfContentsProps extends AppRouteType {}

export const TableOfContents: React.FC<TableOfContentsProps> = props => {
  const { cccStore } = props
  const styles = useStyles()

  const { store, extraMeta } = cccStore
  const { toc_link_tree, toc_nodes } = store
  const { pageMetaMap } = extraMeta

  return (
    <Layout routeHistory={props.history}>
      {renderTableOfContents(toc_link_tree, toc_nodes, pageMetaMap, styles)}
    </Layout>
  )
}

const renderTableOfContents = (
  tocTree: TOCLink[],
  tocNodes: TOCNodes,
  pageMetaMap: PageMetaMap,
  styles: Record<string, string>
) => {
  return (
    <ul className={styles.ul}>
      {tocTree.map(renderTableOfContentsNode(tocNodes, pageMetaMap))}
    </ul>
  )
}

const renderTableOfContentsNode = (
  tocNodes: TOCNodes,
  pageMetaMap: PageMetaMap
  // eslint-disable-next-line react/display-name
) => (tocLink: TOCLink, index: number) => {
  const { children, id } = tocLink
  const { text, link } = tocNodes[id]

  const renderedChildren =
    children.length > 0 ? (
      <ul>{children.map(renderTableOfContentsNode(tocNodes, pageMetaMap))}</ul>
    ) : (
      <></>
    )
  const renderedText = link ? (
    <Link to={`/p/${pageMetaMap[id].url}`}>{text}</Link>
  ) : (
    text
  )

  return (
    <li key={index}>
      {renderedText}
      {renderedChildren}
    </li>
  )
}
