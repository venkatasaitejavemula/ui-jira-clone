import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    svg.attr('width', width).attr('height', height);

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value(d => d.value);

    const path = d3.arc().outerRadius(radius).innerRadius(0);

    const arc = g.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc');

    arc.append('path')
      .attr('d', path)
      .attr('fill', d => color(d.data.label));

    return () => {
      svg.selectAll('*').remove();
    };
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default PieChart;
