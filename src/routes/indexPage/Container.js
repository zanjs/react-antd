import React from 'react'
import PropTypes from 'prop-types'
import styles from './Container.less'
import { ResponsiveContainer } from 'recharts'

const Container = ({ children, ratio = 5 / 2, minHeight = 200, maxHeight = 300 }) => {
  return (<div className={styles.container} style={{ minHeight, maxHeight }}>
  <div style={{ marginTop: `${100 / ratio}%` || '100%' }}></div>
  <div className={styles.content} style={{ minHeight, maxHeight }}>
    <ResponsiveContainer>
      {children}
    </ResponsiveContainer>
  </div>
</div>);
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
  ratio: PropTypes.number,
  minHeight: PropTypes.number,
  maxHeight: PropTypes.number,
}

export default Container
