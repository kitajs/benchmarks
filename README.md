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
* __Node:__ `v20.19.5`
* __Run:__ Mon Dec 01 2025 01:47:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 46270.4    | 21.12        | 8.25          |
| bare                     | v20.19.5 | ✗      | 46068.0    | 21.20        | 8.22          |
| kita                     | 1.1.36   | ✓      | 45644.0    | 21.40        | 8.18          |
| fastify                  | 4.29.1   | ✓      | 45404.0    | 21.52        | 8.14          |
| rayo                     | 1.4.6    | ✓      | 45318.4    | 21.57        | 8.08          |
| server-base-router       | 7.1.32   | ✓      | 45244.8    | 21.60        | 8.07          |
| connect                  | 3.7.0    | ✗      | 44636.2    | 21.90        | 7.96          |
| server-base              | 7.1.32   | ✗      | 44368.8    | 22.04        | 7.91          |
| connect-router           | 1.3.8    | ✓      | 42724.0    | 22.90        | 7.62          |
| polkadot                 | 1.0.0    | ✗      | 42658.4    | 22.94        | 7.61          |
| h3-router                | 1.15.4   | ✓      | 42118.4    | 23.24        | 7.51          |
| 0http                    | 3.5.3    | ✓      | 41879.2    | 23.39        | 7.47          |
| h3                       | 1.15.4   | ✗      | 41342.4    | 23.69        | 7.37          |
| restana                  | 4.9.9    | ✓      | 36625.8    | 26.80        | 6.53          |
| koa                      | 2.16.3   | ✗      | 35800.6    | 27.43        | 6.38          |
| hono                     | 4.10.7   | ✓      | 35271.4    | 27.85        | 5.79          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34825.4    | 28.21        | 6.21          |
| restify                  | 11.1.0   | ✓      | 34540.6    | 28.45        | 6.22          |
| take-five                | 2.0.0    | ✓      | 33834.4    | 29.05        | 12.16         |
| koa-router               | 12.0.1   | ✓      | 32626.8    | 30.15        | 5.82          |
| hapi                     | 21.4.4   | ✓      | 31317.2    | 31.42        | 5.58          |
| fastify-big-json         | 4.29.1   | ✓      | 11902.8    | 83.45        | 136.95        |
| express                  | 4.21.2   | ✓      | 11174.8    | 88.91        | 1.99          |
| express-with-middlewares | 4.21.2   | ✓      | 10085.0    | 98.54        | 3.75          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
