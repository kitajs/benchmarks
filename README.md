<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.0`
* __Run:__ Mon Mar 02 2026 01:53:19 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.0 | ✗      | 47157.6    | 20.71        | 8.41          |
| kita                     | 1.1.36   | ✓      | 46002.4    | 21.24        | 8.25          |
| rayo                     | 1.4.6    | ✓      | 45420.0    | 21.52        | 8.10          |
| server-base              | 7.1.32   | ✗      | 45244.8    | 21.60        | 8.07          |
| fastify                  | 4.29.1   | ✓      | 45120.0    | 21.67        | 8.09          |
| polka                    | 0.5.2    | ✓      | 45034.4    | 21.70        | 8.03          |
| server-base-router       | 7.1.32   | ✓      | 44044.0    | 22.20        | 7.85          |
| 0http                    | 3.5.3    | ✓      | 43779.2    | 22.34        | 7.81          |
| connect                  | 3.7.0    | ✗      | 43608.8    | 22.43        | 7.78          |
| connect-router           | 1.3.8    | ✓      | 43011.2    | 22.75        | 7.67          |
| polkadot                 | 1.0.0    | ✗      | 41796.0    | 23.43        | 7.45          |
| h3-router                | 1.15.5   | ✓      | 41526.4    | 23.59        | 7.41          |
| h3                       | 1.15.5   | ✗      | 40836.8    | 23.99        | 7.28          |
| restana                  | 4.9.9    | ✓      | 39628.0    | 24.73        | 7.07          |
| koa                      | 2.16.4   | ✗      | 36776.6    | 26.69        | 6.56          |
| hono                     | 4.12.3   | ✓      | 35997.4    | 27.28        | 5.91          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34506.2    | 28.48        | 6.15          |
| restify                  | 11.1.0   | ✓      | 34371.4    | 28.59        | 6.20          |
| take-five                | 2.0.0    | ✓      | 33930.2    | 28.97        | 12.20         |
| koa-router               | 12.0.1   | ✓      | 33001.0    | 29.80        | 5.89          |
| hapi                     | 21.4.6   | ✓      | 31864.8    | 30.88        | 5.68          |
| fastify-big-json         | 4.29.1   | ✓      | 11879.6    | 83.61        | 136.67        |
| express                  | 4.22.1   | ✓      | 11568.0    | 85.88        | 2.06          |
| express-with-middlewares | 4.22.1   | ✓      | 10581.0    | 93.92        | 3.94          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
