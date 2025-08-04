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
* __Node:__ `v20.19.4`
* __Run:__ Mon Aug 04 2025 01:46:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| h3                       | 1.15.4   | ✗      | 52324.8    | 18.61        | 9.33          |
| bare                     | v20.19.4 | ✗      | 47463.2    | 20.56        | 8.46          |
| kita                     | 1.1.36   | ✓      | 46785.6    | 20.87        | 8.39          |
| polka                    | 0.5.2    | ✓      | 46672.8    | 20.94        | 8.32          |
| fastify                  | 4.29.1   | ✓      | 46402.4    | 21.05        | 8.32          |
| rayo                     | 1.4.6    | ✓      | 46362.4    | 21.05        | 8.27          |
| connect                  | 3.7.0    | ✗      | 46256.0    | 21.11        | 8.25          |
| server-base-router       | 7.1.32   | ✓      | 45572.8    | 21.44        | 8.13          |
| server-base              | 7.1.32   | ✗      | 45514.4    | 21.47        | 8.12          |
| polkadot                 | 1.0.0    | ✗      | 45057.6    | 21.70        | 8.04          |
| 0http                    | 3.5.3    | ✓      | 44634.4    | 21.91        | 7.96          |
| connect-router           | 1.3.8    | ✓      | 43833.6    | 22.30        | 7.82          |
| h3-router                | 1.15.4   | ✓      | 42541.6    | 23.01        | 7.59          |
| restana                  | 4.9.9    | ✓      | 39584.8    | 24.77        | 7.06          |
| koa                      | 2.16.2   | ✗      | 37529.4    | 26.15        | 6.69          |
| hono                     | 4.8.12   | ✓      | 36910.4    | 26.60        | 6.05          |
| take-five                | 2.0.0    | ✓      | 35764.6    | 27.46        | 12.86         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35465.4    | 27.70        | 6.33          |
| restify                  | 11.1.0   | ✓      | 34837.0    | 28.20        | 6.28          |
| koa-router               | 12.0.1   | ✓      | 33681.8    | 29.18        | 6.01          |
| hapi                     | 21.4.0   | ✓      | 32032.2    | 30.70        | 5.71          |
| fastify-big-json         | 4.29.1   | ✓      | 12129.2    | 81.89        | 139.55        |
| express                  | 4.21.2   | ✓      | 11111.2    | 89.43        | 1.98          |
| express-with-middlewares | 4.21.2   | ✓      | 10333.8    | 96.18        | 3.84          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
