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
* __Node:__ `v20.12.2`
* __Run:__ Mon May 13 2024 01:17:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| kita                     | 1.1.36   | ✓      | 47504.0    | 20.55        | 8.52          |
| bare                     | v20.12.2 | ✗      | 46664.8    | 20.92        | 8.32          |
| 0http                    | 3.5.3    | ✓      | 45720.8    | 21.38        | 8.15          |
| fastify                  | 4.27.0   | ✓      | 45605.6    | 21.42        | 8.18          |
| connect                  | 3.7.0    | ✗      | 45460.8    | 21.50        | 8.11          |
| polkadot                 | 1.0.0    | ✗      | 45120.0    | 21.67        | 8.05          |
| polka                    | 0.5.2    | ✓      | 44772.8    | 21.84        | 7.98          |
| rayo                     | 1.4.6    | ✓      | 44728.0    | 21.87        | 7.98          |
| server-base-router       | 7.1.32   | ✓      | 44490.4    | 21.98        | 7.93          |
| server-base              | 7.1.32   | ✗      | 43277.6    | 22.60        | 7.72          |
| connect-router           | 1.3.8    | ✓      | 42777.6    | 22.87        | 7.63          |
| h3                       | 1.11.1   | ✗      | 41936.0    | 23.35        | 7.48          |
| h3-router                | 1.11.1   | ✓      | 40865.6    | 23.97        | 7.29          |
| hono                     | 4.3.6    | ✓      | 39266.4    | 24.96        | 7.00          |
| restana                  | 4.9.9    | ✓      | 37335.8    | 26.29        | 6.66          |
| koa                      | 2.15.3   | ✗      | 36398.2    | 26.98        | 6.49          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34615.0    | 28.39        | 6.17          |
| take-five                | 2.0.0    | ✓      | 33834.2    | 29.05        | 12.16         |
| koa-router               | 12.0.1   | ✓      | 33450.0    | 29.40        | 5.97          |
| restify                  | 11.1.0   | ✓      | 33143.6    | 29.66        | 5.97          |
| hapi                     | 21.3.9   | ✓      | 30706.0    | 32.06        | 5.48          |
| fastify-big-json         | 4.27.0   | ✓      | 11590.8    | 85.71        | 133.36        |
| express                  | 4.19.2   | ✓      | 10709.6    | 92.80        | 1.91          |
| express-with-middlewares | 4.19.2   | ✓      | 9904.3     | 100.36       | 3.68          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
