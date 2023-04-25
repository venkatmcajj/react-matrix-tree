import React, { useEffect } from 'react'
import styled from 'styled-components'
//
const BottomArrow = styled('div')({
  borderBottom: `5px solid ${(props: any) => props.color}`,
})
const BottomArrowDownContainer = styled.div`
  display: flex,
  justify-content: space-between,
  &:last-child{
    margin-right: -19px;
    margin-left: auto;
  }
`
const TopArrowUpContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
})
const BottomArrowDown = styled.div`
  content: '';
  width: 0;
  height: 0;
  margin-left: -19px;
  border-top: 15px solid #6a0136;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  margin-top: 20px;
  position: relative;
  &:before {
    content: '';
    width: 4px;
    height: 25px;
    background: #6a0136;
    margin-right: -2px;
    margin-bottom: 14px;
    position: absolute;
    bottom: 100%;
    right: 50%;
  }
`
const TopArrowUp = styled.div`
  content: '';
  width: 0;
  height: 0;
  border-bottom: 15px solid #6a0136;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  margin-bottom: 20px;
  position: relative;
  &:before {
    content: '';
    width: 4px;
    height: 25px;
    background: #6a0136;
    margin-right: -3px;
    margin-top: 14px;
    position: absolute;
    top: 100%;
    right: 50%;
  }
`
enum Tooltiptype {
  HTML,
  TEXT,
}
type Arrayvalues = {
  imageSource?: string
  title: string
  tooltip?: string
  tooltiptype?: Tooltiptype
  onClick?: Function
  data?: Array<Arrayvalues>
}
type Props = {
  data: Array<Arrayvalues>
  isMobile: boolean
}
type TreeProps = {
  childrens: Array<Arrayvalues>
  level: number
  ismobileview: boolean
}
const Tree = ({ data, isMobile }: Props) => {
  useEffect(() => {
    if (!data) {
      throw Error('Data field is undefined, need array value to render a Tree component')
    }
  }, [data])
  const GetTree = ({ childrens, level, ismobileview }: TreeProps) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'center' }}>
        {childrens.map((e: any, i: any) => {
          return (
            <div key={i} id={level + e.title} style={{ width: `${100 / childrens.length}%` }}>
              {e.imageSource && <img src={e.imageSource} style={{ height: 40, width: 40 }} />}
              <h5 title={e.tooltip}>
                {e.title} {level}
              </h5>
              {ismobileview && childrens.length > 2 ? (
                <></>
              ) : (
                <>
                  {e.data && e.data.length > 0 && level < 4 && (
                    <>
                      <div
                        style={{
                          width: e.data.length > 0 ? `${100 - 100 / e.data.length}%` : 0,
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginBottom: 10,
                        }}
                      >
                        <TopArrowUpContainer>
                          <TopArrowUp />
                        </TopArrowUpContainer>
                        <BottomArrow color='#6a0136' />
                        <BottomArrowDownContainer>
                          {e.data.map((e1: any) => {
                            return <BottomArrowDown key={e1.title}></BottomArrowDown>
                          })}
                        </BottomArrowDownContainer>
                      </div>
                      <GetTree childrens={e.data} level={level + 1} ismobileview={ismobileview} />
                    </>
                  )}
                </>
              )}
              {/* <connection from='#d1' to='#d2' color='red' tail></connection> */}
            </div>
          )
        })}
      </div>
    )
  }
  return <GetTree childrens={data} level={1} ismobileview={isMobile ?? false} />
}

export default Tree
